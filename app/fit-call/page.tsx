'use client';
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FitCallPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Schedule your <span className="text-blue-600">15-Minute Fit Call</span>
        </h1>
        <p className="text-gray-600 mb-8 max-w-prose">
          A short, no-pressure conversation to see if we’re a good fit.
          You’ll share what you’re working toward, and I’ll outline what coaching could look like for you.
        </p>

        <Button asChild>
          <a
            href="https://cal.com/garethpitt-hart/15min-fit-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar className="w-4 h-4 mr-2" /> Book your call
          </a>
        </Button>

        <p className="mt-8 text-sm text-gray-500">
          Held via Zoom or phone — you’ll get a confirmation email with details.
        </p>
      </div>
    </main>
  );
}
