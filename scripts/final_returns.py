def get_final_returns(amount, roi):
    roi_amount = amount * (roi/100)

    final_roi= amount + roi_amount

    return final_roi

