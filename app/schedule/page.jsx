"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect } from "react";

export default function SchedulePage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30-minute-meeting" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <main className="schedule-page">
      <div className="container schedule-layout">
        <aside className="schedule-copy">
          <p className="section-kicker">Meet with SCLU</p>
          <h1>Book time.</h1>
          <p>
            Want to collaborate, ask a question, or talk through an organizing idea? This page makes it easy to set up a conversation with the SCLU team.
          </p>
          <ul className="resource-list">
            <li>Student organizers</li>
            <li>Campaign partners</li>
            <li>Media and event inquiries</li>
            <li>Volunteer onboarding</li>
          </ul>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/" className="primary-link">Back home</Link>
          </div>
        </aside>

        <div className="cal-wrapper">
          <Cal
            namespace="30-minute-meeting"
            calLink="students-civil-liberties-union/30-minute-meeting"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
          />
        </div>
      </div>
    </main>
  );
}
