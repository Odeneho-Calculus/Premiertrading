"use client";

import { useRouter } from "next/navigation";
import { Headset } from "lucide-react";

export default function CustomerService() {
    const router = useRouter();

    return (
        <button
            className="fab-button"
            onClick={() => router.push("https://direct.lc.chat/18996309/")}
        >
            <Headset size={28} />
        </button>
    );
}
