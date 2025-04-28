'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'

export default function ContinentalDishes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Category Header */}
      <div className="category-header">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Continental Dishes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover 30 exquisite continental dishes with professional plating techniques from around the world.
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="container py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button className="filter-button-active">All Dishes</button>
          <button className="filter-button">French</button>
          <button className="filter-button">Italian</button>
          <button className="filter-button">Spanish</button>
          <button className="filter-button">Mediterranean</button>
        </div>
        
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">30 Continental Dishes</h2>
            <TabsList>
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="grid" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Sample dish cards - these would be generated from data */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image 
                      src={`/placeholder-${(i % 3) + 1}.jpg`}
                      alt="Dish"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Beef Bourguignon</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      French beef stew braised in red wine with mushrooms and onions
                    </p>
                    <Button asChild size="sm">
                      <Link href="/continental/beef-bourguignon">View Plating Ideas</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="list" className="mt-0">
            <div className="space-y-4">
              {/* Sample list items - these would be generated from data */}
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-48 h-48">
                      <Image 
                        src={`/placeholder-${(i % 3) + 1}.jpg`}
                        alt="Dish"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-semibold text-lg">Beef Bourguignon</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        A classic French dish of beef stew braised in red wine, often with carrots, onions, garlic, and a bouquet garni, then garnished with pearl onions, mushrooms, and bacon.
                      </p>
                      <Button asChild size="sm">
                        <Link href="/continental/beef-bourguignon">View Plating Ideas</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Footer */}
      <footer className="mt-auto py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Culinary Canvas</h2>
          <p className="text-muted-foreground mb-4">The Art of Food Plating</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Culinary Canvas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
