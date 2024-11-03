"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardNav } from "@/components/dashboard/nav";
import { AlertMap } from "@/components/dashboard/alert-map";
import { RiskMetrics } from "@/components/dashboard/risk-metrics";
import { WeatherData } from "@/components/dashboard/weather-data";
import { AlertsList } from "@/components/dashboard/alerts-list";
import { RainfallGraph } from "@/components/dashboard/graphs/rainfall-graph";
import { SoilMoistureGraph } from "@/components/dashboard/graphs/soil-moisture-graph";
import { RiskLevelGraph } from "@/components/dashboard/graphs/risk-level-graph";
import { AlertButton } from "@/components/dashboard/alert-button";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Landslide Monitoring Dashboard</h1>
              <AlertButton />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <RiskMetrics />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <AlertMap />
              <WeatherData />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <RainfallGraph />
              <SoilMoistureGraph />
              <RiskLevelGraph />
            </div>
            <AlertsList />
          </>
        );
      case "risk-map":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Risk Map</h1>
            <AlertMap />
            <RiskLevelGraph />
          </div>
        );
      case "alerts":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Alert Management</h1>
              <AlertButton />
            </div>
            <AlertsList />
            <RiskMetrics />
          </div>
        );
      case "weather":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Weather Monitoring</h1>
            <WeatherData />
            <div className="grid gap-6 md:grid-cols-2">
              <RainfallGraph />
              <SoilMoistureGraph />
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Analytics</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <RainfallGraph />
              <SoilMoistureGraph />
              <RiskLevelGraph />
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            <div className="rounded-lg border bg-card p-6">
              <p className="text-muted-foreground">Settings panel will be implemented here.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav onNavChange={setActiveSection} />
        <main className="flex-1 p-6">
          <div className="grid gap-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}