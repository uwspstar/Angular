import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigSet } from '../../interface/configset';
import { Config } from '../../interface/config';
import { Observable } from 'rxjs/Observable';

const URL_CONFIGSETS = "mockdata/configsets.json"
const URL_CONFIGS = "mockdata/configs.json"

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfigSetList(): Observable<ConfigSet[]> {
    return this.http.get<ConfigSet[]>(URL_CONFIGSETS);
  }

  getConfigList(): Observable<Config[]> {
    return this.http.get<Config[]>(URL_CONFIGS);
  }

}