import { VideoFeed } from "@/components/VideoFeed";
import { AlertPanel } from "@/components/AlertPanel";
import { StatsGrid } from "@/components/StatsGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
Shield,
Eye,
Camera,
Settings,
Activity,
Users,
MapPin,
Clock,
Wrench,
CheckCircle,
Phone,
Mail,
Star,
Building,
Award
} from "lucide-react";
import heroImage from "@/assets/surveillance-hero.jpg";

const Index = () => {
const videoFeeds = [
{ id: "cam001", title: "Main Entrance", location: "Building A - Ground Floor", status: "online" as const, isRecording: true },
{ id: "cam002", title: "Parking Garage", location: "Level B1", status: "online" as const, isRecording: false },
{ id: "cam003", title: "Reception Area", location: "Building A - Lobby", status: "recording" as const, isRecording: true },
{ id: "cam004", title: "Loading Dock", location: "Building B - Rear", status: "online" as const, isRecording: false },
{ id: "cam005", title: "Server Room", location: "Building A - Floor 2", status: "offline" as const, isRecording: false },
{ id: "cam006", title: "Emergency Exit", location: "Building A - Floor 3", status: "online" as const, isRecording: true },
];

return (
<div className="min-h-screen bg-background">
{/* Header */}
<header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
<div className="container mx-auto px-4 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 bg-gradient-primary rounded-lg">
<Shield className="h-6 w-6 text-white" />
</div>
<div>
<h1 className="text-xl font-bold text-foreground">SecureWatch Pro</h1>
<p className="text-sm text-muted-foreground">Advanced Video Surveillance System</p>
</div>
</div>

<div className="flex items-center gap-4">
<Badge variant="outline" className="border-surveillance-primary text-surveillance-primary">
<Activity className="w-3 h-3 mr-1" />
System Online
</Badge>
<Button variant="outline" size="sm">
<Settings className="w-4 h-4 mr-2" />
Settings
</Button>
</div>
</div>
</div>
</header>

<div className="container mx-auto px-4 py-6 space-y-6">
{/* Hero Section */}
<div
className="relative rounded-xl overflow-hidden bg-gradient-dark h-64 bg-cover bg-center"
style={{ backgroundImage: `url(${heroImage})` }}
>
<div className="absolute inset-0 bg-black/60" />
<div className="relative z-10 h-full flex items-center justify-center text-center">
<div className="max-w-2xl mx-auto px-4">
<h2 className="text-4xl font-bold text-white mb-4">
Advanced Video Analytics
</h2>
<p className="text-xl text-white/90 mb-6">
Real-time monitoring and intelligent threat detection for complete security coverage
</p>
<div className="flex items-center justify-center gap-4">
<Button className="bg-surveillance-primary hover:bg-surveillance-secondary">
<Eye className="w-4 h-4 mr-2" />
View Live Feeds
</Button>
<Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
<Camera className="w-4 h-4 mr-2" />
Manage Cameras
</Button>
</div>
</div>
</div>
</div>

{/* Services Section */}
<Card>
<CardHeader>
<CardTitle className="flex items-center gap-2">
<Wrench className="h-5 w-5 text-surveillance-primary" />
Professional Installation & Service
</CardTitle>
</CardHeader>
<CardContent>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Installation Service */}
<div className="bg-gradient-surveillance p-6 rounded-lg border border-surveillance-primary/20">
<div className="flex items-center gap-3 mb-4">
<div className="p-3 bg-surveillance-primary/20 rounded-lg">
<Settings className="h-6 w-6 text-surveillance-primary" />
</div>
<h3 className="text-lg font-semibold text-foreground">Expert Installation</h3>
</div>
<p className="text-muted-foreground mb-4">
Professional installation of security cameras, monitoring systems, and complete surveillance infrastructure.
</p>
<ul className="space-y-2 text-sm text-muted-foreground">
<li className="flex items-center gap-2">
<CheckCircle className="h-4 w-4 text-surveillance-success" />
Site survey & planning
</li>
<li className="flex items-center gap-2">
<CheckCircle className="h-4 w-4 text-surveillance-success" />
Professional cable management
</li>
<li className="flex items-center gap-2">
<CheckCircle className="h-4 w-4 text-surveillance-success" />
System testing & calibration
</li>
</ul>
</div>

{/* Maintenance Service */}
<div className="bg-gradient-surveillance p-6 rounded-lg border border-surveillance-primary/20">
<div className="flex items-center gap-3 mb-4">
<div className="p-3 bg-surveillance-secondary/20 rounded-lg">
<Wrench className="h-6 w-6 text-surveillance-secondary" />
</div>
<h3 className="text-lg font-semibold text-foreground">24/7 Maintenance</h3>
</div>
<p className="text-muted-foreground mb-4">
Comprehensive maintenance and support services to ensure your security system operates at peak performance.
</p>
<ul className="space-y-2 text-sm text-muted-foreground">
<li className="flex items-center gap-2">
<CheckCircle className="h-4 w-4 text-surveillance-success" />
Regular system health checks
</li>
<li className="flex items-center gap-2">
<CheckCircle className="h-4 w-4 text-surveillance-success" />
Software updates & patches
</li>
<li className="flex items-center gap-2">
<CheckCircle className="h-4 w-4 text-surveillance-success" />
Emergency repair service
</li>
</ul>
</div>

{/* Customer Support */}
<div className="bg-gradient-surveillance p-6 rounded-lg border border-surveillance-primary/20">
<div className="flex items-center gap-3 mb-4">
<div className="p-3 bg-surveillance-accent/20 rounded-lg">
<Phone className="h-6 w-6 text-surveillance-accent" />
</div>
<h3 className="text-lg font-semibold text-foreground">Expert Support</h3>
</div>
<p className="text-muted-foreground mb-4">
Dedicated customer support team available to assist with any questions or technical issues.
</p>
<div className="space-y-3">
<Button className="w-full bg-surveillance-primary hover:bg-surveillance-secondary">
<Phone className="w-4 h-4 mr-2" />
Call Support
</Button>
<Button variant="outline" className="w-full">
<Mail className="w-4 h-4 mr-2" />
Email Us
</Button>
</div>
</div>
</div>

{/* Why Choose Us */}
<div className="mt-8 pt-8 border-t border-border">
<h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
<Star className="h-5 w-5 text-surveillance-accent" />
Why Choose Our Services
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="text-center p-4">
<div className="text-3xl font-bold text-surveillance-primary mb-2">15+</div>
<p className="text-sm text-muted-foreground">Years Experience</p>
</div>
<div className="text-center p-4">
<div className="text-3xl font-bold text-surveillance-secondary mb-2">500+</div>
<p className="text-sm text-muted-foreground">Installations</p>
</div>
<div className="text-center p-4">
<div className="text-3xl font-bold text-surveillance-accent mb-2">99.9%</div>
<p className="text-sm text-muted-foreground">Uptime Guarantee</p>
</div>
<div className="text-center p-4">
<div className="text-3xl font-bold text-surveillance-success mb-2">24/7</div>
<p className="text-sm text-muted-foreground">Support Available</p>
</div>
</div>
</div>
</CardContent>
</Card>

{/* Partners Section */}
<Card>
<CardHeader>
<CardTitle className="flex items-center gap-2">
<Building className="h-5 w-5 text-surveillance-primary" />
Trusted Partners & Certifications
</CardTitle>
</CardHeader>
<CardContent>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
{/* Partner logos placeholders */}
<div className="bg-gradient-surveillance p-4 rounded-lg border border-surveillance-primary/20 flex items-center justify-center h-20">
<div className="text-center">
<Building className="h-8 w-8 text-surveillance-primary mx-auto mb-1" />
<p className="text-xs text-muted-foreground">Hikvision</p>
</div>
</div>
<div className="bg-gradient-surveillance p-4 rounded-lg border border-surveillance-primary/20 flex items-center justify-center h-20">
<div className="text-center">
<Camera className="h-8 w-8 text-surveillance-secondary mx-auto mb-1" />
<p className="text-xs text-muted-foreground">Dahua</p>
</div>
</div>
<div className="bg-gradient-surveillance p-4 rounded-lg border border-surveillance-primary/20 flex items-center justify-center h-20">
<div className="text-center">
<Shield className="h-8 w-8 text-surveillance-accent mx-auto mb-1" />
<p className="text-xs text-muted-foreground">Axis</p>
</div>
</div>
<div className="bg-gradient-surveillance p-4 rounded-lg border border-surveillance-primary/20 flex items-center justify-center h-20">
<div className="text-center">
<Eye className="h-8 w-8 text-surveillance-primary mx-auto mb-1" />
<p className="text-xs text-muted-foreground">Bosch</p>
</div>
</div>
<div className="bg-gradient-surveillance p-4 rounded-lg border border-surveillance-primary/20 flex items-center justify-center h-20">
<div className="text-center">
<Award className="h-8 w-8 text-surveillance-secondary mx-auto mb-1" />
<p className="text-xs text-muted-foreground">Hanwha</p>
</div>
</div>
<div className="bg-gradient-surveillance p-4 rounded-lg border border-surveillance-primary/20 flex items-center justify-center h-20">
<div className="text-center">
<Settings className="h-8 w-8 text-surveillance-accent mx-auto mb-1" />
<p className="text-xs text-muted-foreground">Avigilon</p>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-border">
<p className="text-center text-muted-foreground">
Certified partners with leading security technology manufacturers worldwide
</p>
</div>
</CardContent>
</Card>

{/* Stats Grid */}
<StatsGrid />

{/* Main Content Grid */}
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
{/* Video Feeds */}
<div className="lg:col-span-3 space-y-6">
<Card>
<CardHeader>
<CardTitle className="flex items-center gap-2">
<Camera className="h-5 w-5 text-surveillance-primary" />
Live Camera Feeds
<Badge variant="secondary" className="ml-auto">
{videoFeeds.filter(feed => feed.status === 'online').length} Online
</Badge>
</CardTitle>
</CardHeader>
<CardContent>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
{videoFeeds.map((feed) => (
<VideoFeed key={feed.id} {...feed} />
))}
</div>
</CardContent>
</Card>

{/* Analytics Dashboard */}
<Card>
<CardHeader>
<CardTitle className="flex items-center gap-2">
<Activity className="h-5 w-5 text-surveillance-accent" />
Real-time Analytics
</CardTitle>
</CardHeader>
<CardContent>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-gradient-surveillance p-4 rounded-lg border border-surveillance-primary/20">
<div className="flex items-center gap-3">
<Users className="h-8 w-8 text-surveillance-primary" />
<div>
<p className="text-2xl font-bold text-foreground">234</p>
<p className="text-sm text-muted-foreground">People Detected</p>
</div>
</div>
</div>

<div className="bg-gradient-surveillance p-4 rounded-lg border border-surveillance-primary/20">
<div className="flex items-center gap-3">
<MapPin className="h-8 w-8 text-surveillance-secondary" />
<div>
<p className="text-2xl font-bold text-foreground">12</p>
<p className="text-sm text-muted-foreground">Zones Monitored</p>
</div>
</div>
</div>

<div className="bg-gradient-surveillance p-4 rounded-lg border border-surveillance-primary/20">
<div className="flex items-center gap-3">
<Clock className="h-8 w-8 text-surveillance-accent" />
<div>
<p className="text-2xl font-bold text-foreground">99.2%</p>
<p className="text-sm text-muted-foreground">Uptime Today</p>
</div>
</div>
</div>
</div>
</CardContent>
</Card>
</div>

{/* Alerts Panel */}
<div className="lg:col-span-1">
<AlertPanel />
</div>
</div>
</div>
</div>
);
};

export default Index;
