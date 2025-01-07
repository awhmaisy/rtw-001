import Apparel from './apparel/apparel';
import Items from './items/items';

export default function Home() {
  return (
    <div className="min-h-screen font-['Times_New_Roman'] p-2">
      <div className="w-full flex justify-center items-center mb-8">
        <img src="/Evangelion Title Card.png" alt="Description" width={300} className="mr-auto -ml-4 sm:-ml-3" />
      </div>
      <p>
        X-12, U.S.A. SS 2025, RTW 001 <br/>
        FORGED IN AMERICA <br/>
        MFG. BY PRECISION MACHINERY
      </p>
      <br />
      <p>
        ALL PIECES WILL BE LIMITED QUANTITY <br/>
        PLEASE EMAIL FOR PRICE AND PURCHASE <br/>
        NO RETURNS EXCHANGES OR REFUNDS
      </p>
      <br/><br/><br/><br/>
      <p style={{textDecoration: 'underline'}}>
        COLLECTION INCLUDES
      </p>
      <Apparel />
      <br />
      <Items />
    </div>
  );
}
