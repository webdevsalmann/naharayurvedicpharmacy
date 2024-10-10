"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { Filter } from "lucide-react";
import { shopFilters } from "@/lib/data/data";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useSiteState } from "@/components/providers/site-state-provider";
import SidebarToggleButton from "./sidebar-toggle-button";

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useSiteState();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchValues = Array.from(searchParams.entries());

  return (
    <div className={cn("z-[99999] flex md:block md:relative md:h-fit", sidebarOpen ? "fixed inset-0" : "hidden")} >
      <div className={cn(
        "relative top-0 bottom-0 left-0 w-64",
        "md:relative w-64 h-full bg-secondary rounded-tr-md rounded-br-md overflow-y-scroll",
        (sidebarOpen ? "block" : "hidden"),
      )}>

        <div className={cn("p-4 space-y-4 divide-y divide-neutral-400")}>
          {/* Filter Header */}
          <div className="font-medium">
            <div className="md:hidden mb-base">
              <SidebarToggleButton />
            </div>

            <div className="flex items-center">
              <Filter className="inline size-xl mr-2 shrink-0" strokeWidth={2.5} />
              <div className="text-lg font-semibold">Filter Product</div>
            </div>
          </div>

          {/* Filter */}
          {shopFilters.map((section) => (
            <Accordion key={section.id + "FilterSection"} type="single" collapsible>
              <AccordionItem className="-mb-xs" value={section.id + "FilterSection"}>
                <AccordionTrigger className="text-lg py-sm">
                  {section.name}
                </AccordionTrigger>

                <AccordionContent>
                  <div className="space-y-sm">
                    {section.options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-xs"
                      >
                        <Checkbox
                          id={section.id + option.value}
                          onClick={() => {
                            const params = new URLSearchParams(searchParams);
                            if (params.has("search")) params.delete("search");
                            const isChecked = searchValues.some(
                              ([key, value]) => key === section.id && value === option.value
                            );

                            if (isChecked) {
                              params.delete(section.id);
                              searchValues.forEach(([key, value]) => {
                                if (key === section.id && value !== option.value) {
                                  params.append(key, value);
                                }
                              });
                            } else {
                              params.append(section.id, option.value);
                            }

                            router.replace(`/shop/?${params.toString()}`);
                          }}
                          checked={searchValues.some(
                            ([key, value]) => key === section.id && value === option.value
                          )}
                        />
                        <label className="text-sm font-medium leading-none select-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor={section.id + option.value}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}

        </div>
      </div>
      <div className="relative inset-0 bg-black/30 flex-1" onClick={() => setSidebarOpen(!sidebarOpen)} />
    </div>
  )
}
