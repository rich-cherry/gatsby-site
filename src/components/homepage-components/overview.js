import React from 'react'
import overviewStyles from './overview.module.scss'
import TerminalSvg from '../../images/icons/terminal-solid.svg'
import ChartSvg from '../../images/icons/chart.svg'
import CodeSvg from '../../images/icons/code.svg'
import BrushSvg from '../../images/icons/brush-solid.svg'

const Terminal = () => <><img src={TerminalSvg} style={{ width: "50px" }} /></>
const Chart = () => <><img src={ChartSvg} style={{ width: "50px" }} /></>
const Code = () => <><img src={CodeSvg} style={{ width: "50px" }} /></>
const Brush = () => <><img src={BrushSvg} style={{ width: "50px" }} /></>

export default function Overview() {
    return (
        <div className={overviewStyles.container}>
            <div className={overviewStyles.a}>
                <div>
                    <h1> overview</h1>
                    <hr />
                </div>
            </div>
            <div className={overviewStyles.b}>
                <h3>Full-stack Shopify Developer based in the US with over six years of experience working within the Shopify platform, as well as building headless Shopify sites.</h3>
            </div>
            <div className={overviewStyles.c}>
                <div className={overviewStyles.flex}>
                    <Brush />
                    <h3>UX / UI Design</h3>
                </div>
            </div>
            <div className={overviewStyles.d}>
                <div className={overviewStyles.flex}>
                    <Terminal />
                    <h3>Shopify Design & Build</h3>
                </div>
            </div>
            <div className={overviewStyles.e}>
                <div className={overviewStyles.flex}>
                    <Code />
                    <h3>Attention to Detail</h3>
                </div>
            </div>
            <div className={overviewStyles.f}>
                <div className={overviewStyles.flex}>
                    <Chart />
                    <h3>Growth Oriented</h3>
                </div>
            </div>
        </ div >
    )


}
