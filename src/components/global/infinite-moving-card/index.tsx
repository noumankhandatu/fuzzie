"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { testimonials } from "@/lib/raw-data";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

