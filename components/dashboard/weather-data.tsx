"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Droplets, Sun, Wind } from "lucide-react";

export function WeatherData() {
  const weatherData = [
    { icon: Cloud, label: "Cloud Cover", value: "65%" },
    { icon: Droplets, label: "Humidity", value: "78%" },
    { icon: Sun, label: "Temperature", value: "24°C" },
    { icon: Wind, label: "Wind Speed", value: "15 km/h" },
  ];

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Weather Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {weatherData.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xl font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}