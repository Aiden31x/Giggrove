import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

interface JobCardProps {
  job: string
  domain: string
  subdomain: string
  description: string
}

function JobCard({ job, domain, subdomain, description }: JobCardProps) {
  return (
    <Card className="w-full max-w-2xl bg-white">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 overflow-hidden">
          <h3 className="text-lg font-semibold">{job}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
            <span className="truncate">{domain}</span>
            <span>•</span>
            <span className="truncate">{subdomain}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default JobCard;