"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, CreditCard, Globe, Key, Lock, Save, Shield, Smartphone, User, Users, Plus } from "lucide-react"
import MainNavbar from "@/components/main-navbar"

export default function SettingsPage() {
  const [saving, setSaving] = useState(false)

  const handleSave = () => {
    setSaving(true)
    // Simulate API call
    setTimeout(() => {
      setSaving(false)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <MainNavbar/>

      <main className="flex-1 pt-16 p-4 md:p-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-slate-600 dark:text-slate-400">Manage your account settings and preferences</p>
          </div>

          <Tabs defaultValue="account" className="space-y-6">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-5">
              <TabsTrigger value="account" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Account</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Security</span>
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Billing</span>
              </TabsTrigger>
              <TabsTrigger value="team" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Team</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Update your account details and public profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="Sarah Johnson" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="sarah@technova.ai" />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" defaultValue="TechNova" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="role">Role</Label>
                        <Input id="role" defaultValue="CEO & Co-Founder" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        rows={4}
                        defaultValue="Former Data Science Lead at Google with 10+ years of experience in AI and machine learning."
                      />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="website">Website</Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="website" className="pl-9" defaultValue="https://technova.ai" />
                        </div>
                      </div>
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Smartphone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="phone" className="pl-9" defaultValue="+1 (555) 123-4567" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSave} disabled={saving}>
                      {saving ? "Saving..." : "Save Changes"}
                      {!saving && <Save className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle>Profile Visibility</CardTitle>
                  <CardDescription>Control how your profile appears to others</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Public Profile</Label>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Make your profile visible to all users on the platform
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Show Email Address</Label>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Display your email address on your public profile
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Show Financial Information</Label>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Display financial metrics on your public profile
                        </p>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Appear in Search Results</Label>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Allow your profile to appear in search results
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSave} disabled={saving}>
                      {saving ? "Saving..." : "Save Changes"}
                      {!saving && <Save className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage how and when you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Messages</Label>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Receive email notifications for new messages
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Connection Requests</Label>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Receive email notifications for new connection requests
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Deal Room Activity</Label>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Receive email notifications for activity in your deal rooms
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Platform Updates</Label>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Receive email notifications about platform updates and new features
                          </p>
                        </div>
                        <Switch />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Marketing Communications</Label>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Receive promotional emails and newsletters
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <h3 className="text-lg font-medium pt-4">In-App Notifications</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Real-time Notifications</Label>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Receive real-time notifications in the app
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Profile Views</Label>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Receive notifications when someone views your profile
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Mentions</Label>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Receive notifications when you are mentioned in a message or comment
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSave} disabled={saving}>
                      {saving ? "Saving..." : "Save Changes"}
                      {!saving && <Save className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your password and security preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Change Password</h3>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="current-password" type="password" className="pl-9" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <div className="relative">
                          <Key className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="new-password" type="password" className="pl-9" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <div className="relative">
                          <Key className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="confirm-password" type="password" className="pl-9" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium pt-4">Two-Factor Authentication</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Enable Two-Factor Authentication</Label>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <h3 className="text-lg font-medium pt-4">Session Management</h3>

                    <div className="space-y-4">
                      <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Current Session</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              MacBook Pro • San Francisco, CA • Last active: Just now
                            </p>
                          </div>
                          <Badge>Current</Badge>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        Sign Out of All Other Sessions
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSave} disabled={saving}>
                      {saving ? "Saving..." : "Save Changes"}
                      {!saving && <Save className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                  <CardDescription>Manage your subscription and payment methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Current Plan</h3>

                    <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Pro Plan</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            $49/month • Renews on July 15, 2023
                          </p>
                        </div>
                        <Button variant="outline">Upgrade</Button>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium pt-4">Payment Method</h3>

                    <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-16 items-center justify-center rounded bg-slate-100 dark:bg-slate-800">
                            <CreditCard className="h-5 w-5 text-slate-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">Visa ending in 4242</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Expires 12/2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Add Payment Method
                    </Button>

                    <h3 className="text-lg font-medium pt-4">Billing History</h3>

                    <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                              <th className="px-4 py-3 text-left text-sm font-medium text-slate-500 dark:text-slate-400">
                                Date
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-slate-500 dark:text-slate-400">
                                Description
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-slate-500 dark:text-slate-400">
                                Amount
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-slate-500 dark:text-slate-400">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-slate-200 dark:border-slate-700">
                              <td className="px-4 py-3 text-sm">June 15, 2023</td>
                              <td className="px-4 py-3 text-sm">Pro Plan Subscription</td>
                              <td className="px-4 py-3 text-sm">$49.00</td>
                              <td className="px-4 py-3 text-sm">
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900"
                                >
                                  Paid
                                </Badge>
                              </td>
                            </tr>
                            <tr className="border-b border-slate-200 dark:border-slate-700">
                              <td className="px-4 py-3 text-sm">May 15, 2023</td>
                              <td className="px-4 py-3 text-sm">Pro Plan Subscription</td>
                              <td className="px-4 py-3 text-sm">$49.00</td>
                              <td className="px-4 py-3 text-sm">
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900"
                                >
                                  Paid
                                </Badge>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-sm">April 15, 2023</td>
                              <td className="px-4 py-3 text-sm">Pro Plan Subscription</td>
                              <td className="px-4 py-3 text-sm">$49.00</td>
                              <td className="px-4 py-3 text-sm">
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900"
                                >
                                  Paid
                                </Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle>Team Management</CardTitle>
                  <CardDescription>Manage your team members and their access</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Team Members</h3>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Member
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          name: "Sarah Johnson",
                          email: "sarah@technova.ai",
                          role: "Admin",
                          image: "/placeholder.svg?height=40&width=40&text=SJ",
                        },
                        {
                          name: "David Chen",
                          email: "david@technova.ai",
                          role: "Admin",
                          image: "/placeholder.svg?height=40&width=40&text=DC",
                        },
                        {
                          name: "Maria Rodriguez",
                          email: "maria@technova.ai",
                          role: "Member",
                          image: "/placeholder.svg?height=40&width=40&text=MR",
                        },
                        {
                          name: "James Wilson",
                          email: "james@technova.ai",
                          role: "Member",
                          image: "/placeholder.svg?height=40&width=40&text=JW",
                        },
                      ].map((member, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-700 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={member.image} alt={member.name} />
                              <AvatarFallback>
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{member.name}</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400">{member.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Select defaultValue={member.role.toLowerCase()}>
                              <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="member">Member</SelectItem>
                                <SelectItem value="viewer">Viewer</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-medium pt-4">Pending Invitations</h3>

                    <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">aisha@example.com</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Invited 2 days ago • Member role</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Resend
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSave} disabled={saving}>
                      {saving ? "Saving..." : "Save Changes"}
                      {!saving && <Save className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

