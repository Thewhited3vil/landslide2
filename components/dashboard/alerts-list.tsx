"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Info } from "lucide-react";

export function AlertsList() {
  const alerts = [
    {
      id: 1,
      type: "warning",
      location: "Munnar, Kerala",
      message: "Heavy rainfall expected in the next 24 hours",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "info",
      location: "Darjeeling, West Bengal",
      message: "Soil moisture levels increasing",
      time: "4 hours ago",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start space-x-4 rounded-lg border p-4"
            >
              {alert.type === "warning" ? (
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              ) : (
                <Info className="h-5 w-5 text-blue-500" />
              )}
              <div className="flex-1 space-y-1">
                <p className="font-medium">{alert.location}</p>
                <p className="text-sm text-muted-foreground">{alert.message}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}