"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, DollarSign, Calendar, Eye, TrendingUp, MessageSquare } from "lucide-react"
import Link from "next/link"

export function DashboardOverview() {
  // Sample data - will be replaced with real data from Supabase
  const stats = [
    {
      title: "Total Cars",
      value: "12",
      change: "+2 this month",
      icon: Car,
      color: "text-blue-600",
    },
    {
      title: "Total Revenue",
      value: "$45,230",
      change: "+12% from last month",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Bookings",
      value: "8",
      change: "3 ending this week",
      icon: Calendar,
      color: "text-orange-600",
    },
    {
      title: "Profile Views",
      value: "1,234",
      change: "+18% this week",
      icon: Eye,
      color: "text-purple-600",
    },
  ]

  const recentActivity = [
    {
      id: "1",
      type: "booking",
      message: "New booking for Toyota Camry",
      time: "2 hours ago",
      status: "pending",
    },
    {
      id: "2",
      type: "inquiry",
      message: "Customer inquiry about BMW X5",
      time: "4 hours ago",
      status: "new",
    },
    {
      id: "3",
      type: "sale",
      message: "Honda Accord sold successfully",
      time: "1 day ago",
      status: "completed",
    },
    {
      id: "4",
      type: "review",
      message: "New 5-star review received",
      time: "2 days ago",
      status: "positive",
    },
  ]

  const topPerformingCars = [
    {
      id: "1",
      title: "Toyota Camry 2022",
      views: 245,
      inquiries: 12,
      bookings: 5,
      image: "/silver-toyota-camry-sedan.png",
    },
    {
      id: "2",
      title: "BMW X5 2021",
      views: 189,
      inquiries: 8,
      bookings: 3,
      image: "/black-bmw-x5-luxury-suv.jpg",
    },
    {
      id: "3",
      title: "Honda CR-V 2023",
      views: 156,
      inquiries: 6,
      bookings: 4,
      image: "/white-honda-crv-suv.jpg",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your cars.</p>
        </div>
        <Link href="/dashboard/add-car">
          <Button>
            <Car className="h-4 w-4 mr-2" />
            Add New Car
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full bg-muted/30 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      activity.status === "completed"
                        ? "default"
                        : activity.status === "pending"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/dashboard/activity">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View All Activity
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Cars */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Cars</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformingCars.map((car) => (
                <div key={car.id} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.title}
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{car.title}</h4>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                      <span>{car.views} views</span>
                      <span>{car.inquiries} inquiries</span>
                      <span>{car.bookings} bookings</span>
                    </div>
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/dashboard/analytics">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Analytics
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/dashboard/add-car">
              <Button variant="outline" className="w-full h-20 flex-col bg-transparent">
                <Car className="h-6 w-6 mb-2" />
                <span className="text-sm">Add Car</span>
              </Button>
            </Link>
            <Link href="/dashboard/bookings">
              <Button variant="outline" className="w-full h-20 flex-col bg-transparent">
                <Calendar className="h-6 w-6 mb-2" />
                <span className="text-sm">View Bookings</span>
              </Button>
            </Link>
            <Link href="/dashboard/messages">
              <Button variant="outline" className="w-full h-20 flex-col bg-transparent">
                <MessageSquare className="h-6 w-6 mb-2" />
                <span className="text-sm">Messages</span>
              </Button>
            </Link>
            <Link href="/dashboard/analytics">
              <Button variant="outline" className="w-full h-20 flex-col bg-transparent">
                <TrendingUp className="h-6 w-6 mb-2" />
                <span className="text-sm">Analytics</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
