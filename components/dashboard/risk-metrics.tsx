"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Droplets, Mountain, Wind } from "lucide-react";

export function RiskMetrics() {
  const metrics = [
    {
      title: "Risk Level",
      value: "Moderate",
      icon: AlertTriangle,
      description: "Current overall risk assessment",
      color: "text-yellow-500",
    },
    {
      title: "Rainfall",
      value: "125mm",
      icon: Droplets,
      description: "Last 24 hours",
      color: "text-blue-500",
    },
    {
      title: "Soil Stability",
      value: "Stable",
      icon: Mountain,
      description: "Current ground conditions",
      color: "text-green-500",
    },
    {
      title: "Wind Speed",
      value: "15 km/h",
      icon: Wind,
      description: "Current wind conditions",
      color: "text-purple-500",
    },
  ];

  return (
    <>
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}