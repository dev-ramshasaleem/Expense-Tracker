"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileCard from "@/src/components/settings/ProfileCard";

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className=" text-black">Manage your account preferences.</p>
      </div>

      <ProfileCard />
    </div>
  );
}
