"use client";

import { useState } from "react";
import { Home, Map, AlertTriangle, Cloud, Settings, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  icon: typeof Home;
  label: string;
  value: string;
};

const navItems: NavItem[] = [
  { icon: Home, label: "Overview", value: "overview" },
  { icon: Map, label: "Risk Map", value: "risk-map" },
  { icon: AlertTriangle, label: "Alerts", value: "alerts" },
  { icon: Cloud, label: "Weather", value: "weather" },
  { icon: Activity, label: "Analytics", value: "analytics" },
  { icon: Settings, label: "Settings", value: "settings" },
];

export function DashboardNav({ 
  onNavChange 
}: { 
  onNavChange: (value: string) => void 
}) {
  const [active, setActive] = useState("overview");

  const handleNavClick = (value: string) => {
    setActive(value);
    onNavChange(value);
  };

  return (
    <div className="hidden border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:block">
      <div className="flex h-[calc(100vh-3.5rem)] flex-col gap-2 p-4">
        {navItems.map((item) => (
          <Button
            key={item.value}
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2",
              active === item.value && "bg-accent"
            )}
            onClick={() => handleNavClick(item.value)}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}