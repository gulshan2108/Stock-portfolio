import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, ListGroup, Card} from 'react-bootstrap';
import { CChart } from '@coreui/react-chartjs';
import {getStocks} from "../redux/Stocks/Stocks.action"
import Stock from './component/Stock';

const StockList = () => {
    const dispatch = useDispatch()
    const[stockList, setStockList] = useState([])
    const[graphData, setGraphData] = useState([])

    const {stockData} = useSelector((state)=>{
      return{
        stockData: state?.stock?.stockData
      }
    })

    useEffect(()=>{
      dispatch(getStocks())
    },[]) // eslint-disable-next-line react-hooks/exhaustive-deps

    useEffect(()=>{
        if(stockData?.data){
            let MFData=0, ETFData=0
            setStockList(stockData?.data)
            stockData?.data?.foreach((data,i)=>{
                if(i<4){
                    MFData=MFData+data?.portfoli_percent
                }else{
                    ETFData=ETFData+data?.portfoli_percent
                }
            })
            setGraphData([MFData,ETFData])
        }
    },[stockData])

    return(
        <section className='py-3 portfolio-wrapper'>
            <Container fluid>
                <Row>
                    <Col lg={9}>
                        <ListGroup>
                            {stockList?.map((data,i)=>{
                                return(
                                    <Stock data={data} key={i}/>
                                )
                            })}
                    </ListGroup>
                    </Col>
                    <Col lg={3}>
                        <Card className='p-3'>
                            <h5>Portfolio</h5>
                            <CChart
                                type="doughnut"
                                data={{
                                    labels: ["Mutual Fund","ETF's"],
                                    datasets: [
                                        {
                                            backgroundColor: ['#00D8FF', '#a8a532'],
                                            data: graphData,
                                        },
                                    ],
                                }}
                            />

                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default StockList