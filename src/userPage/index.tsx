import React, {FC, useEffect, useState} from "react";
import {getWeatherFromCity} from "../api";
import {AutoComplete, Button, Form, Input, message, Radio, Spin} from 'antd';

const options = [
    {value: "Tokyo"},
    {value: "Paris"},
    {value: "Berlin"},
    {value: "London"},
]


export const User: FC = () => {
    const [form] = Form.useForm();
    const [weatherData, setWeatherData] = useState<null | {
        cityName: string,
        currentTemp: string
    }>(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
    }, [])

    const submit = async () => {
        try {
            const values = await form.validateFields();
            console.log('res', values.city)
            setLoading(true)
            const res = await getWeatherFromCity(values.city)
            console.log('res', res)
            setLoading(false)
            if (res.code == 200) {
                const cityName = res.data?.name || '';
                const currentTemp = (res.data?.main?.temp - 273.15).toFixed(2) || '';

                console.log(`城市: ${cityName}, 当前温度: ${currentTemp}K`);
                setWeatherData({
                    cityName,
                    currentTemp
                })
            }
        } catch (errorInfo) {
            setLoading(false)
            console.log('Failed:', errorInfo);
            message.error('请求失败，请重试')
        }

    }


    return <div className={'contentWrap'}>
        <h3>输入城市查询天气</h3>

        <Form
            layout={'inline'}
            form={form}
            initialValues={{layout: 'inline'}}
        >
            <Form.Item label="city" name={'city'}>
                <AutoComplete
                    style={{width: 200}}
                    options={options}
                    placeholder="请输入城市名"
                    filterOption={(inputValue, option) =>
                        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" onClick={submit} loading={loading}>Submit</Button>
            </Form.Item>
        </Form>
        <Spin spinning={loading}>
            <div className={'weatherInfoWrap'}>
                {`城市: ${weatherData?.cityName || '-'}, 当前温度: ${weatherData?.currentTemp || '-'}℃`}
            </div>
        </Spin>
    </div>
}