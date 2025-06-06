'use client'
import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react'
import Curreny from './curreny';
import { CurrencyType } from '@/types/currency';

const fetchData = async ({
    currency,
    date,
}: {
    currency: string;
    date: string;
}): Promise<CurrencyType[] | null> => {
    try {
        const res = await fetch(
            `https://cbu.uz/uz/arkhiv-kursov-valyut/json/${currency}/${date}`
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Ma’lumotlarini olishda xatolik:", err);
        return null;
    }
};

const CurrencyBox = () => {
    const [currencies, setCurrencies] = useState<CurrencyType[] | null>(null);

    const getCurrencyData = async () => {
        try {
            const date = DateTime.now();
            const formatted = date.toFormat("yyyy-MM-dd");

            const usdData =
                (await fetchData({ currency: "USD", date: formatted })) || [];
            const rubData =
                (await fetchData({ currency: "RUB", date: formatted })) || [];
            const eurData =
                (await fetchData({ currency: "EUR", date: formatted })) || [];
            const cnyData =
                (await fetchData({ currency: "CNY", date: formatted })) || [];

            setCurrencies([...usdData, ...eurData, ...rubData, ...cnyData]);
        } catch (error) {
            console.error("Ma'lumotlarini olishda xatolik:", error);
        }
    };

    useEffect(() => {
        getCurrencyData();
    }, []);

    return (
        <div className='flex max-md:gap-0 gap-4'>
            {currencies && (
                <>
                    <Curreny currency={[currencies[0], currencies[1]]} />
                    <Curreny currency={[currencies[2], currencies[3]]} />
                </>
            )}
        </div>
    )
}

export default CurrencyBox
