export const CurrencyConverter = (props) => {

    return (
         (props.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR', currencyDisplay: props.currencyDisplay })
        // (props.price).toLocaleString('de-DE', { style: 'currency', currency: 'EUR', currencyDisplay: props.currencyDisplay  })
        // (props.price).toLocaleString('ja-JP', { style: 'currency', currency: 'JPY', currencyDisplay: props.currencyDisplay  })
        // (props.price).toLocaleString('en-US', { style: 'currency', currency: 'USD', currencyDisplay: props.currencyDisplay  })
    )
}