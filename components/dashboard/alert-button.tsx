"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Bell } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const riskAreas = [
  { id: "munnar", label: "Munnar, Kerala", riskLevel: "High" },
  { id: "wayanad", label: "Wayanad, Kerala", riskLevel: "Moderate" },
  { id: "idukki", label: "Idukki, Kerala", riskLevel: "High" },
  { id: "darjeeling", label: "Darjeeling, West Bengal", riskLevel: "Moderate" },
  { id: "nilgiris", label: "Nilgiris, Tamil Nadu", riskLevel: "Moderate" },
];

export function AlertButton() {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const handleAlert = () => {
    if (selectedAreas.length === 0) {
      toast.error("Please select at least one area to send alerts");
      return;
    }

    // Here you would integrate with your SMS/alert service
    toast.success(`Alerts sent to ${selectedAreas.length} areas`, {
      description: "Emergency services and local authorities have been notified.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="gap-2">
          <AlertTriangle className="h-4 w-4" />
          Send Emergency Alert
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Send Emergency Alerts</DialogTitle>
          <DialogDescription>
            Select areas to send emergency alerts to residents and local authorities.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {riskAreas.map((area) => (
            <div key={area.id} className="flex items-center space-x-4">
              <Checkbox
                id={area.id}
                checked={selectedAreas.includes(area.id)}
                onCheckedChange={(checked) => {
                  setSelectedAreas(checked
                    ? [...selectedAreas, area.id]
                    : selectedAreas.filter(a => a !== area.id)
                  );
                }}
              />
              <div className="flex-1 space-y-1">
                <Label htmlFor={area.id}>
                  {area.label}
                </Label>
                <p className="text-sm text-muted-foreground">
                  Risk Level: {area.riskLevel}
                </p>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant="destructive" onClick={handleAlert}>
            Send Alerts
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}