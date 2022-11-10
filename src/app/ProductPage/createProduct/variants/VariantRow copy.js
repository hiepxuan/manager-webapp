import React, {Component} from 'react'
import VariantSelector from './VariantSelector'
import VariantFromAttributes from './VariantFromAttributes'
import VariantSKU from './VariantSKU'
import VariantMerchizeSKU from './VariantMerchizeSKU'
import VariantWeight from './VariantWeight'
import VariantRetailPrice from './VariantRetailPrice'
import VariantDefault from './VariantDefault'
import VariantBaseCost from './VariantBaseCost'
import VariantProfit from './VariantProfit'
import VariantImageContainer from './images/VariantImageContainer'

class VariantRow extends Component {
    render() {
        return (
            <tr className='VariantRow'>
                <VariantSelector {...this.props}/>
                <VariantImageContainer {...this.props}/>
                <VariantFromAttributes {...this.props}/>
                <VariantSKU {...this.props}/>
                <VariantMerchizeSKU {...this.props}/>
                <VariantBaseCost {...this.props}/>
                <VariantWeight {...this.props}/>
                <VariantRetailPrice {...this.props}/>
                <VariantProfit {...this.props}/>
                <VariantDefault {...this.props}/>
            </tr>
        )
    }
}

export default VariantRow
