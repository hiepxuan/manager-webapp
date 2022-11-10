import React, {Component} from 'react'
import {FormFeedback} from 'reactstrap'
import _ from 'lodash'
import classNames from 'classnames'
import NumberFormat from 'react-number-format'
import {checkStoreIsMP} from '../../../../../../helpers/mpModeHelper'

//import PropTypes from 'prop-types'

class VariantRetailPrice extends Component {
    _handleChangeInput = ({floatValue}) => {
        this.props.onChangeProduct(`variants[${this.props.variantIndex}].retail_price`, floatValue)
    }

    render() {
        const {variantIndex, variant = {}, errors, store} = this.props
        const retailPriceError = _.get(errors, `variants.${variantIndex}.retail_price`)
        const {retail_price, base_cost} = variant
        const hasError = !!retailPriceError && (isNaN(retail_price) || retail_price < base_cost)
        const isModeMp = checkStoreIsMP(store)
        const currency = store.getSetting('currency', isModeMp ? 'VND' : 'USD')

        return (
            <td className="VariantRetailPrice">
                <div className="position-relative">
                    <NumberFormat
                        value={variant.retail_price ?? ''}
                        className={classNames('form-control', {'is-invalid': hasError})}
                        onValueChange={this._handleChangeInput}
                        thousandSeparator={currency === 'VND' ? '.' : ','}
                        decimalSeparator={currency === 'VND' ? ',' : '.'}
                        decimalScale={currency === 'VND' ? 0 : 2}
                    />

                    {hasError && <FormFeedback tooltip>{retailPriceError}</FormFeedback>}
                </div>
            </td>
        )
    }
}

//VariantBaseCost.defaultProps = {}

//VariantBaseCost.propTypes = {}

export default VariantRetailPrice
