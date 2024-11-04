"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ChallengeCelebration } from "./components/ChallengeCelebration";
import { ChallengeCompletion } from "./components/ChallengeCompletion";
import { ChallengeNavigation } from "./components/ChallengeNavigation";
import { ChallengeStats } from "./components/ChallengeStats";
import { EndSessionDialog } from "./components/EndSessionDialog";
import { HackathonTerminal } from "./components/HackathonTerminal";
import { ScoreDisplay } from "./components/ScoreDisplay";
import { TimeLimit } from "./components/TimeLimit";
import { TimeUpCompletion } from "./components/TimeUpCompletion";
import { sampleChallenges } from "./data/challenges";
import { useChallengeProgress } from "./hooks/useChallengeProgress";
import { useHackathonState } from "./hooks/useHackathonState";
import { calculateScore } from "./utils/scoring";
import { AsyncStateWrapper } from './components/AsyncStateWrapper';

const DynamicChallenge = dynamic(
  () =>
    import("./components/Challenge").then((mod) => ({
      default: mod.Challenge,
    })),
  { ssr: false }
);

type View = "menu" | "challenge" | "rankings";

export default function Hackathon() {
  const router = useRouter();
  const [currentView, setCurrentView] = useState<View>("menu");
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const {
    progress,
    markChallengeComplete,
    currentChallengeIndex,
    resetProgress,
  } = useChallengeProgress(sampleChallenges);

  const [selectedIndex, setSelectedIndex] = useState(currentChallengeIndex);
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastExecutionTime, setLastExecutionTime] = useState(0);
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    hackathonState,
    finalState,
    startHackathon,
    endHackathon,
    resetHackathon,
    hasActiveSession,
  } = useHackathonState();

  const TIME_LIMIT = 45; // 45 minutes

  useEffect(() => {
    localStorage.setItem("hackathon_state", JSON.stringify(hackathonState));
  }, [hackathonState]);

  useEffect(() => {
    if (
      progress.completedChallenges.length === sampleChallenges.length &&
      hackathonState.startTime
    ) {
      endHackathon({
        completedChallenges: progress.completedChallenges,
        totalScore: progress.totalScore,
      });
    }
  }, [progress.completedChallenges.length, hackathonState.startTime, progress.completedChallenges, progress.totalScore, endHackathon]);

  const handleStartHackathon = async () => {
    setIsLoading(true);
    try {
      if (hasActiveSession) {
        setCurrentView("challenge");
      } else {
        await startHackathon();
        setCurrentView("challenge");
      }
    } catch (error) {
      console.error("Error starting hackathon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTimeUp = () => {
    console.log("Time's up!");
    if (hackathonState.startTime) {
      endHackathon({
        completedChallenges: progress.completedChallenges,
        totalScore: progress.totalScore,
      });
    }
  };

  const handleChallengeComplete = async (executionTime: number) => {
    setIsLoading(true);
    try {
      if (hackathonState.startTime) {
        console.log("Challenge completed with execution time:", executionTime);

        const currentChallenge = sampleChallenges[selectedIndex];
        const score = calculateScore({
          executionTime,
          difficulty: currentChallenge.difficulty
        });

        console.log("Calculated score:", score);

        setLastExecutionTime(executionTime);
        setShowCelebration(true);
        await markChallengeComplete(currentChallenge.id, executionTime);
      }
    } catch (error) {
      console.error("Error completing challenge:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextChallenge = () => {
    setShowCelebration(false);
    if (selectedIndex < sampleChallenges.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleViewRankings = () => {
    router.push("/hackathon/rankings");
  };

  const handleStartNewSession = () => {
    resetHackathon();
    resetProgress();
    setSelectedIndex(0);
    setShowCelebration(false);
    startHackathon();
    setCurrentView("challenge");
  };

  const handleEndSession = () => {
    setShowEndDialog(true);
  };

  const handleConfirmEndSession = () => {
    if (hackathonState.startTime) {
      endHackathon({
        completedChallenges: progress.completedChallenges,
        totalScore: progress.totalScore,
      });
      setShowEndDialog(false);
    }
  };

  return (
    <div className="relative flex flex-col h-4/5 w-3/4 p-4 rounded-lg border border-[#4AF626] bg-black/90 font-mono text-[#4AF626] shadow-lg shadow-[#4AF626]/20">
      <div className="flex items-center justify-between border-b border-[#4AF626]/30 pb-2 mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-sm opacity-50">TTU Hackathon</div>
        <div className="flex items-center gap-4">
          {currentView !== "menu" && (
            <ScoreDisplay score={progress.totalScore} />
          )}
          {hackathonState.startTime && currentView !== "menu" && (
            <>
              <TimeLimit
                startTime={hackathonState.startTime}
                duration={TIME_LIMIT}
                onTimeUp={handleTimeUp}
              />
              <Button
                variant="outline"
                size="sm"
                onClick={handleEndSession}
                className="text-red-500 border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
              >
                End Session
              </Button>
            </>
          )}
          {currentView !== "menu" && (
            <button
              onClick={() => setCurrentView("menu")}
              className="text-sm hover:text-white transition-colors"
            >
              Exit to Menu
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        {currentView === "menu" ? (
          <HackathonTerminal
            onStart={handleStartHackathon}
            onViewRankings={handleViewRankings}
            hasSeenIntro={hasSeenIntro}
            onIntroComplete={() => setHasSeenIntro(true)}
            hasActiveSession={hasActiveSession}
            onStartNewSession={handleStartNewSession}
          />
        ) : (
          <>
            {progress.completedChallenges.length === sampleChallenges.length ? (
              <ChallengeCompletion
                completedChallenges={progress.completedChallenges}
                totalScore={progress.totalScore}
                onRestart={handleStartNewSession}
                onViewRankings={handleViewRankings}
              />
            ) : !hackathonState.startTime && hackathonState.hasStarted ? (
              <TimeUpCompletion
                completedChallenges={progress.completedChallenges}
                totalScore={progress.totalScore}
                timeElapsed={TIME_LIMIT * 60 * 1000}
                onRestart={handleStartNewSession}
                onViewRankings={handleViewRankings}
                endType={finalState?.endType || "timeout"}
              />
            ) : (
              <>
                <div className="flex-1 flex flex-col min-h-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      style={{
                        flex: 1,
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Suspense fallback={<div>Loading...</div>}>
                        <AsyncStateWrapper
                          isLoading={isLoading}
                          type="challenge"
                        >
                          <DynamicChallenge
                            challenge={sampleChallenges[selectedIndex]}
                            onShowCelebration={setShowCelebration}
                            onSetLastExecutionTime={setLastExecutionTime}
                            onMarkChallengeComplete={markChallengeComplete}
                          />
                        </AsyncStateWrapper>
                      </Suspense>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="border-t border-[#4AF626]/30 pt-4 space-y-4">
                  <ChallengeStats
                    progress={progress.completedChallenges.find(
                      (p) => p.id === sampleChallenges[selectedIndex].id
                    )}
                  />

                  <ChallengeNavigation
                    challenges={sampleChallenges}
                    currentChallengeIndex={selectedIndex}
                    progress={progress.completedChallenges}
                    onNavigate={setSelectedIndex}
                  />
                </div>

                {showCelebration && hackathonState.startTime && (
                  <ChallengeCelebration
                    score={calculateScore({
                      executionTime: lastExecutionTime,
                      difficulty: sampleChallenges[selectedIndex].difficulty
                    })}
                    executionTime={lastExecutionTime}
                    difficulty={sampleChallenges[selectedIndex].difficulty}
                    onNext={handleNextChallenge}
                    isLastChallenge={selectedIndex === sampleChallenges.length - 1}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>

      <EndSessionDialog
        isOpen={showEndDialog}
        onClose={() => setShowEndDialog(false)}
        onConfirm={handleConfirmEndSession}
        score={progress.totalScore}
        completedChallenges={progress.completedChallenges.length}
        totalChallenges={sampleChallenges.length}
      />
    </div>
  );
}
