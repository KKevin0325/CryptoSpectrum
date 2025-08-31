
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  BarChart3, 
  FileText, 
  TrendingUp, 
  Shield, 
  Settings, 
  Activity,
  Bell,
  Search
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: BarChart3,
    description: "Overview & Analytics"
  },
  {
    title: "Reports",
    url: createPageUrl("Reports"),
    icon: FileText,
    description: "Generated Reports"
  },
  {
    title: "Assets",
    url: createPageUrl("Assets"),
    icon: TrendingUp,
 
