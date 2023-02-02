import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import {FaCoins} from 'react-icons/fa'
import {MdAlternateEmail} from 'react-icons/md'
import {GrCurrency} from 'react-icons/gr'
import {IoMdArrowDropup,IoMdArrowDropdown} from 'react-icons/io'
import { ListGroup, ProgressBar, Form, Button } from 'react-bootstrap';

const Stock = ({data}) => {
    return(
        <ListGroup.Item as="li" className='mb-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between left-container w-20 me-4 align-items-center'>
                    <div className='me-2'><AiOutlineMenu/></div>
                    <div className='mx-2 fund-type text-center'>
                        <span className='text-muted small'>{data?.type}</span>
                        <p>$<span>{data?.total_amount}</span></p>
                    </div>
                    <div className='flex-grow-1 share-type'>
                        <p className='company-name'>iShares</p>
                        <p className='script-name'>{data?.script}</p>
                        <span className='small'>{data?.stock_type}</span>
                    </div>
                </div>
                <div className='d-flex justify-content-between right-container flex-grow-1 w-80 ms-4 align-items-center'>
                    <div className='stock-detail small d-flex'>
                        <div className='text-muted me-4'>
                            <p><FaCoins/>Quantity</p>
                            <p><MdAlternateEmail/>Avg. Cost</p>
                            <p><GrCurrency/>Invested Amt</p>
                        </div>
                        <div className='d-flex flex-column'>
                        <span>${data?.quantity}</span>
                        <span>${data?.avg_cost}</span>
                        <span>${data?.invasted_amt}</span>
                        </div>
                    
                    </div>
                    <div>
                        <div className='d-flex small'>
                            <div className='me-2'>
                                <p className='mb-1 fw-bold'>Market Value </p>
                                <p className='mb-2 text-muted'>% of profit value</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <span className='mb-1 fw-bold'>${data?.price}</span>
                                <span className='mb-2 fw-semibold'>{data?.portfoli_percent} %</span>
                            </div>

                        </div>
                        <ProgressBar className="progressbar" now={data?.portfoli_percent} />
                    </div>
                    <div>
                        <div className='d-flex small'>
                            <div className='me-2'>
                                <p className='mb-1 fw-bold'>Unrealized P&L</p>
                                <p className='mb-2 text-muted'>% Return</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <span className='mb-1 fw-bold'>${data?.unrealizedPL}</span>
                                <span className='mb-2 fw-semibold'>
                                    {data?.return < 0 ? <IoMdArrowDropdown color='red' size={25}/> : <IoMdArrowDropup color='green' size={25}/>}
                                    {data?.return} %
                                </span>
                            </div>

                        </div>
                        <Form.Range 
                            className={`${data.return >= 0 ? 'positive': 'negative'}`} 
                            min={-100}
                            max={100}
                            defaultValue={data.return}
                        />
                    </div>
                    <div className='d-flex flex-column'>
                        <Button variant="outline-danger mb-1">Buy</Button>
                        <Button variant="outline-danger mt-1">Sell</Button>
                    </div>
                </div>
            </div>
        </ListGroup.Item>
    )
}
export default Stock;