"use client";

import { ReactNode } from "react";

interface TableProps {
    children: ReactNode;
    className?: string;
    titulo?: string
}





export function Table({ children, titulo }: TableProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 relative">
            <h2 className="text-lg font-semibold mb-4">{titulo}</h2>
            <div className="overflow-y-auto max-h-100">
                <table className="w-full border-collapse">
                    {children}
                </table>
            </div>
        </div>
    );
}
export function TableHead({ children }: TableProps) {
    return (
        <thead className="sticky top-0 bg-white z-1 border-b border-sky-300">
            {children}
        </thead>
    );
}

export function TableHeader({ children }: TableProps) {
    return (
        <th className="py-3 px-4 text-gray-500 font-medium text-sm text-start">
            {children}
        </th>
    );
}

export function TableRow({ children }: TableProps) {
    return (
        <tr className="border-b border-sky-100 hover:bg-sky-50 transition">
            {children}
        </tr>
    );
}

export function TableCell({ children, className }: TableProps) {
    return (
        <td className={`py-3 px-4 text-sm  ${className || ""}`}>{children}</td>
    );
}

   