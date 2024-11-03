"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AlertMap() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Risk Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[16/9] rounded-lg border bg-card p-4">
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Interactive map will be implemented here
          </div>
        </div>
      </CardContent>
    </Card>
  );
}