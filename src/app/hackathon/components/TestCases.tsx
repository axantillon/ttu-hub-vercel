"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { useEffect, useState } from "react";
import { AlertTriangle, ChevronDown, ChevronUp } from "react-feather";
import { ExecutionResult, TestCase } from "../types";

interface TestCasesProps {
  testCases: TestCase[];
  results?: ExecutionResult[];
  isExecuting?: boolean;
}

export const TestCasesComponent = ({
  testCases,
  results,
  isExecuting,
}: TestCasesProps) => {
  const [openTestCase, setOpenTestCase] = useState<number | null>(null);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-[#4AF626] text-xs">Test Cases</h3>
        {results && results[0]?.aiDetection?.isAIGenerated && (
          <div className="flex items-center gap-2">
            <Badge
              variant="destructive"
              className="bg-yellow-500/20 text-yellow-500 border-yellow-500/50"
            >
              <AlertTriangle className="w-3 h-3 mr-1" />
              AI Generated Code Detected
            </Badge>
          </div>
        )}
        {results && (
          <div className="flex items-center gap-2">
            <Badge
              variant={
                results.every((r) => r.passed) ? "default" : "destructive"
              }
              className={cn(
                results.every((r) => r.passed) &&
                  "bg-[#4AF626] hover:bg-[#4AF626]/90 text-black"
              )}
            >
              {results.filter((r) => r.passed).length}/{results.length} Passed
            </Badge>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto pr-4">
        <div className="space-y-2">
          {testCases.map((testCase, index) => (
            <div
              key={index}
              className="border border-[#4AF626]/30 rounded-md bg-black/30 overflow-hidden"
            >
              <Button
                variant="ghost"
                className="w-full px-4 py-2 h-auto hover:bg-black/40"
                onClick={() =>
                  setOpenTestCase(openTestCase === index ? null : index)
                }
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-[#4AF626]/70">
                    Test Case {index + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    {results?.[index] && (
                      <>
                        <Badge
                          variant={
                            results[index].passed ? "default" : "destructive"
                          }
                          className={cn(
                            "text-xs",
                            isExecuting && "opacity-50",
                            results[index].passed &&
                              "bg-[#4AF626] hover:bg-[#4AF626]/90 text-black"
                          )}
                        >
                          {results[index].passed ? "Passed" : "Failed"}
                        </Badge>
                        {results[index].executionTime && !isExecuting && (
                          <span className="text-xs text-[#4AF626]/70">
                            {results[index].executionTime.toFixed(2)}ms
                          </span>
                        )}
                      </>
                    )}
                    {openTestCase === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </div>
              </Button>

              {openTestCase === index && (
                <div className="px-4 py-2 text-sm space-y-2">
                  <div>
                    <span className="text-[#4AF626]/70">Input:</span>
                    <pre className="mt-1 p-2 rounded bg-black/50 overflow-x-auto text-white text-xs">
                      {testCase.input}
                    </pre>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-[#4AF626]/70">
                        Expected Output:
                      </span>
                      <pre className="mt-1 p-2 rounded bg-black/50 overflow-x-auto text-white text-xs">
                        {testCase.expectedOutput}
                      </pre>
                    </div>

                    {results?.[index] && (
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#4AF626]/70">
                            Your Output:
                          </span>
                          <Badge
                            variant={
                              results[index].passed ? "default" : "destructive"
                            }
                            className={cn(
                              "text-xs",
                              isExecuting && "opacity-50",
                              results[index].passed &&
                                "bg-[#4AF626] hover:bg-[#4AF626]/90 text-black"
                            )}
                          >
                            {results[index].passed ? "Passed" : "Failed"}
                          </Badge>
                        </div>
                        <pre className="mt-1 p-2 rounded bg-black/50 overflow-x-auto text-white text-xs">
                          {results[index].actualOutput}
                        </pre>
                      </div>
                    )}
                  </div>

                  {results?.[index]?.error && (
                    <div>
                      <span className="text-red-500">Error:</span>
                      <pre className="mt-1 p-2 rounded bg-black/50 text-red-400 overflow-x-auto text-xs">
                        {results[index].error}
                      </pre>
                    </div>
                  )}

                  {testCase.explanation && (
                    <div>
                      <span className="text-[#4AF626]/70">Explanation:</span>
                      <p className="mt-1 text-gray-300 text-xs">
                        {testCase.explanation}
                      </p>
                    </div>
                  )}

                  {results?.[index]?.aiDetection?.isAIGenerated && (
                    <div className="mt-2 p-2 rounded bg-yellow-500/10 border border-yellow-500/20">
                      <div className="flex items-center gap-2 text-yellow-500">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="font-medium">
                          AI Generated Code Warning
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-yellow-500/80">
                        {results[index].aiDetection?.explanation}
                      </p>
                      <p className="mt-1 text-xs text-yellow-500/60">
                        Confidence:{" "}
                        {(results[index].aiDetection?.confidence * 100).toFixed(
                          1
                        )}
                        %
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};