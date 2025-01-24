export interface ICounterProps {
    count: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDecrement: () => void;
    handleIncrement: () => void;
    }