"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Car,
  Plus,
  BarChart3,
  MessageSquare,
  Settings,
  Heart,
  Calendar,
  CreditCard,
  Users,
  Menu,
  X,
} from "lucide-react"

export function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { href: "/dashboard", icon: BarChart3, label: "Overview" },
    { href: "/dashboard/my-cars", icon: Car, label: "My Cars" },
    { href: "/dashboard/add-car", icon: Plus, label: "Add Car" },
    { href: "/dashboard/bookings", icon: Calendar, label: "Bookings" },
    { href: "/dashboard/sales", icon: CreditCard, label: "Sales" },
    { href: "/dashboard/messages", icon: MessageSquare, label: "Messages" },
    { href: "/dashboard/favorites", icon: Heart, label: "Favorites" },
    { href: "/dashboard/customers", icon: Users, label: "Customers" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
  ]

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-20 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-card border-r transform transition-transform duration-200 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:h-auto`}
      >
        <div className="p-6">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <Button variant={isActive(item.href) ? "default" : "ghost"} className="w-full justify-start" size="sm">
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <Card className="mt-6">
            <CardContent className="p-4">
              <div className="text-center space-y-2">
                <h4 className="font-semibold text-sm">Upgrade to Pro</h4>
                <p className="text-xs text-muted-foreground">Get unlimited listings and advanced analytics</p>
                <Button size="sm" className="w-full">
                  Upgrade Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
