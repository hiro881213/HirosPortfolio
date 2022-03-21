import { useLocation } from 'react-router-dom';

export const ReadScenarioMain = (props:any) => {

    // GETパラメータを取得する
    const params = new URLSearchParams(useLocation().search);
    const target = params.get('story')

    return (
        <>
            <label>シナリオを読もう</label>
        </>
    );
}