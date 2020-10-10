import React from "react";
import {HourInfo} from './HourInfo';

export const EveryHourInfo = ({info}) => {
    return (
        <section className='temp-every-hour'>
            {info.map(({date, temp, icon}) => {
                return <>
                    <HourInfo date={date} temp={temp} icon={icon} hour={0}/>
                    <HourInfo date={date} temp={temp} icon={icon} hour={1}/>
                    <HourInfo date={date} temp={temp} icon={icon} hour={2}/>
                </>
            })}
        </section>
    )

}