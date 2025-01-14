import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function Services() {
  const services = [
    {
      title: "Web Application Development",
      description: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design, user interface design, authoring, including standardised code and proprietary software, user experience design and search engine optimization.",
      icon: "/placeholder.svg"
    },
    {
      title: "Mobile Application Development",
      description: "We provide a range of mobile application development services including custom mobile development on Android platforms, building cross-platform apps, designing user experience and integrating novel mobile interfaces such as chat and voice",
      icon: "/placeholder.svg"
    },
    {
      title: "Backend Development",
      description: "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.",
      icon: "/placeholder.svg"
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50">
      <div className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Provide</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="bg-background">
              <CardHeader>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 mb-4"
                />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

