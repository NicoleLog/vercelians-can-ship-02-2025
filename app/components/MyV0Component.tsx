import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const scheduleData = [
  {
    day: "Monday",
    type: "Mat Pilates",
    duration: "60 min",
    focus: "Core Strength & Flexibility",
  },
  {
    day: "Tuesday",
    type: "Reformer Pilates",
    duration: "45 min",
    focus: "Full Body Toning",
  },
  {
    day: "Wednesday",
    type: "Rest Day",
    duration: "-",
    focus: "Active Recovery",
  },
  {
    day: "Thursday",
    type: "Pilates Barre",
    duration: "50 min",
    focus: "Lower Body & Balance",
  },
  {
    day: "Friday",
    type: "Mat Pilates",
    duration: "60 min",
    focus: "Posture & Alignment",
  },
  {
    day: "Saturday",
    type: "Reformer Pilates",
    duration: "45 min",
    focus: "Upper Body & Core",
  },
  {
    day: "Sunday",
    type: "Gentle Pilates",
    duration: "30 min",
    focus: "Stretching & Relaxation",
  },
]

export default function PilatesSchedule() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">Weekly Pilates Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {scheduleData.map((session, index) => (
          <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader className="bg-primary/10 py-2">
              <CardTitle className="text-lg font-semibold text-primary">{session.day}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-lg font-medium mb-2">{session.type}</p>
              <p className="text-sm text-muted-foreground mb-1">Duration: {session.duration}</p>
              <p className="text-sm text-muted-foreground">Focus: {session.focus}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

