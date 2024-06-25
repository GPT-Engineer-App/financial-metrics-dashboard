import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardMetric = ({ name, value, trend }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
        <div className="flex mt-2">
          {trend.map((point, index) => (
            <div
              key={index}
              className="w-2 bg-blue-500 mr-1"
              style={{ height: `${point}px` }}
            ></div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardMetric;