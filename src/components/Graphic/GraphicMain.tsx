import { Link } from 'react-router-dom';

import { GraphicItem } from './GraphicItem';
import classes from './scss/GraphicMain.module.scss';

export const GraphicMain = () => {

    // ファイル読み込み処理
    const importAll = (r: __WebpackModuleApi.RequireContext) => {
        return r.keys().map(v => r(v) as string);
    }
    
    // Graphicsディレクトリの内部を全て取り出す
    const images = importAll(require.context('../../assets/graphics', true, /\.(jpg)$/));

    return (
        <>
            <header className = {classes.headerClass}>
                <div className = {classes.title}>
                    <p className = {classes.titleMain}>My Graphic Designs</p>
                    <label>〜PhotoShop Work And CG Art Work〜</label>
                </div>
            </header>

            <main className = {classes.mainClass}>
                <div className = {classes.worksArea}>
                    { 
                        (() => {

                            // ファイル一覧リストを生成する
                            const items: any[] = [];

                            // ファイル一覧リストに各画像をセットする
                            images.forEach( (image:any) => {
                                items.push(<GraphicItem pictUrl = {image}></GraphicItem>)
                            });

                            return items;
                        
                        })()
                    }
                </div>
            </main>
            <footer>
                <Link to = '/'>HOME</Link>
            </footer>
        </>
    );
}