import React from "react";

import AnimatedCounter from "./AnimatedCounter";


const TotalBalaceBox = ({
    accounts = [] , totalBanks , totalCurrentBalance
}: TotlaBalanceBoxProps) =>
    {
        return (
            <section className="total-balance">
                <div className="total-balance-chart">

                </div>

                <div className="flex flex-col gap-6">
                    <h2 className="header-2">
                    Bank Accounts: {totalBanks} 

                    </h2>
                    <div className="flex flex-col gap-2">
                        <p className="total-balance-label">
                            Total current balance and something 

                        </p>

                        <p className="total-balance-amount flex-center gap-2">

                            <AnimatedCounter amount= {totalCurrentBalance}/>
                            

                        </p>

                    </div>

                </div>
            </section>
        )
    }

export default TotalBalaceBox;
