export class Context {

  private static _context: Context;

  private constructor() { }

  static context(): Context {
    if(this._context == null) {
      this._context = new Context();
    }
    return this._context;
  }

  private initMap = {
    _itemValueMap: {},
    _creditMultiplierMap: {}
  };

  itemValueMap() {
    return this.initMap._itemValueMap;
  }

  creditMultiplierMap() {
    return this.initMap._creditMultiplierMap;
  }

  itemValue(item: string): string {
    return this.initMap._itemValueMap[item];
  }

  creditMultiplierValue(creditMultiplier: string): string {
    return this.initMap._creditMultiplierMap[creditMultiplier];
  }

  updateItemValueMap(item: string, value: string) {
    this.initMap._itemValueMap[item] = value;
  }

  updateCreditMultiplierMap(creditMultiplier: string, value: number) {
    this.initMap._creditMultiplierMap[creditMultiplier] = value;
  }

}
