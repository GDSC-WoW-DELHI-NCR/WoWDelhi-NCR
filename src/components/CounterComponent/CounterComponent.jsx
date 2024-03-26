import { useState, useEffect, useRef } from 'react';

const SlotMachine = ({ targetCount, label }) => {
    const [count, setCount] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSpinning(true);
                }
            },
            { threshold: 0.5 } 
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isSpinning) {
            const interval = setInterval(() => {
                const randomCount = Math.floor(Math.random() * (targetCount + 1));
                setCount(randomCount);
            }, 100); 

            setTimeout(() => {
                clearInterval(interval);
                setCount(targetCount);
                setIsSpinning(false);
            }, 3000); 
        }
    }, [isSpinning, targetCount]);

    return (
        <main ref={sectionRef} className="rounded-2xl flex flex-col gap-8">
            <h1 className="text-[60px] xl:text-[70px]">{count}{(targetCount !== 3 || label !== "Tracks") ? "+" : ""}</h1>
            <p className="text-[30px] sm:text-[35px] xl:text-[40px]">{label}</p>
        </main>
    );
};

export default SlotMachine;
