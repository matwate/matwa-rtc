import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function Dashboard({children}: {children: React.ReactNode}) {
  return (
    <>
        <div className='bg-background h-screen w-screen p-4'>
            <Card className='border-muted-foreground'>
                <CardHeader>
                    <CardTitle>
                        Dashboard
                    </CardTitle>
                    <CardDescription>
                        Welcome to the dashboard
                    </CardDescription>
                </CardHeader>
                <Separator className='m-2'/>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </div>
    </>
  )
}

export default Dashboard
