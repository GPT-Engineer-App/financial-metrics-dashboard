import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardMetric from '../components/DashboardMetric';
import Chart from '../components/Chart';

function Index() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Financial Dashboard</h1>
      
      <div className="mb-6">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardMetric name="Revenue" value="$120,000" trend={[50, 60, 70, 65, 80]} />
        <DashboardMetric name="Expenses" value="$80,000" trend={[40, 45, 50, 48, 52]} />
        <DashboardMetric name="Profit" value="$40,000" trend={[10, 15, 20, 17, 28]} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Financial Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Chart />
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;