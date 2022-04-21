import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'
import { WorkItems } from './WorkItems'
import { WorkDetail } from './WorkDetail'

import './scss/work.scss';

export const WorkMain = () => {

    // ファイル読み込み処理
    const importAll = (r: __WebpackModuleApi.RequireContext) => {
        return r.keys().map(v => r(v) as string);
    }

    // Graphicsディレクトリの内部を全て取り出す
    const images = importAll(require.context('../../assets/graphics', true, /\.(jpg)$/));

    return (
        <>
            <header className = 'workContainer w-container'>
                <a href= {getUrl()}>
                    <LogoInf type = {1}></LogoInf>
                </a>
            </header>

            <div className = 'workTitle'>
                <h1>Works</h1>
            </div>

            <section className = 'graphics'>

                <div className = 'graphicsContainer w-container'>
                {
                    (() => {

                        // ファイル一覧リストを生成する
                        const items: any[] = [];

                        // ファイル一覧リストに各画像をセットする
                        images.forEach( (image:any, index: number) => {
                            items.push(<WorkItems pictUrl = {image} target = {index + 1} key = {image}></WorkItems>)
                        });

                        return items;

                    })()
                }
                </div>
            </section>
            <section className = 'workDetail'>
                <div className = 'workTitle titleSpace'>
                    <h1>Detail Works</h1>
                </div>
                <div>
                {
                    (() => {

                        const detailItems: any[] = [];

                        images.forEach( (image:any, index: number) => {
                            detailItems.push(<WorkDetail pictUrl = {image}>{index + 1}</WorkDetail>)
                        });

                        return detailItems;

                    })()
                }
                </div>
            </section>
        </>
    );

}