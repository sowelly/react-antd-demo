const {createClient} = require('@supabase/supabase-js');

// 从环境变量中获取 Supabase 的 URL 和密钥
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const fetchDataFromSupabse = async ({table, columns = '*', filters = {}}) => {
    try {
        console.log('fetchDataFromSupabse:', table, columns, filters)
        const {data, error} = await supabase.from(table).select(columns).match(filters)
        if (error) {
            throw error
        }
        console.log('supabase error:', data)

        return data
    } catch (e) {
        console.error('supabase error:', e)
        throw new Error('Failed to fetch data from Supabase')
    }
}
module.exports = {fetchDataFromSupabse, supabase};