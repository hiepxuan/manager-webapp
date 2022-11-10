import React, {Component} from 'react'
import {Input} from 'reactstrap'
import PropTypes from 'prop-types'

class VariantMerchizeSKU extends Component {
    _handleChangeInput = e => {
        this.props.onChangeProduct(`variants[${this.props.variantIndex}].sku`, e.target.value.trim())
    }

    render() {
        const isAdmin = this.props.store.hasStoreRole('admin')

        return (
            <td className='VariantMerchizeSKU'>
                <Input
                    disabled={!isAdmin}
                    value={this.props.variant.sku ?? ''}
                    onChange={this._handleChangeInput}
                />
            </td>
        )
    }
}

VariantMerchizeSKU.propTypes = {
    store: PropTypes.object.isRequired,
    variant: PropTypes.object.isRequired,
    variantIndex: PropTypes.object.isRequired,
    onChangeProduct: PropTypes.func.isRequired,
}

export default VariantMerchizeSKU
