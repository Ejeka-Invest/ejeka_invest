def main():
    amount = float(input("amount: $ "))
    int_rate = float(input("Interest Rate (%) : "))
    total_no_of_days = int(input("No of Days: "))

    roi_per_day(total_no_of_days=total_no_of_days, current_day=2, amount=amount, int_rate=int_rate)


def roi_per_day(total_no_of_days, current_day, amount, int_rate):
    money=amount*(int_rate/100)
    final_roi_amount = money
    money_roi_for_day = money/total_no_of_days

    #print(final_roi_amount, money_roi_for_day)
    print(money_roi_for_day*current_day)



# Program run
main()


"""
different percentage for different time periods
"""
