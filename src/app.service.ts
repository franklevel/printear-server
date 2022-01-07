import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { catchError, map, Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getProductById(
    id: number,
    storeId: number,
  ): Promise<Observable<AxiosResponse<any>>> {
    const url = `${this.configService.get<string>(
      'API_URL',
    )}/${storeId}/products/${id}`;
    console.log({ url });
    return this.httpService.get(url, this.localConfig()).pipe(
      map((response) => response.data),
      catchError((error) => {
        throw new HttpException(error.response.data, error.response.status);
      }),
    );
  }

  localConfig() {
    return {
      headers: {
        Authentication: `bearer ${this.configService.get<string>(
          'ACCESS_TOKEN',
        )}`,
        'Content-Type': 'application/json',
        'User-Agent': `${this.configService.get<string>(
          'USER_AGENT_SIGNATURE',
        )}`,
      },
    } as AxiosRequestConfig;
  }

  async getToken(code: string): Promise<Observable<AxiosResponse<any>>> {
    const data = {
      client_id: `${this.configService.get<number>('CLIENT_ID')}`,
      client_secret: `${this.configService.get<string>('CLIENT_SECRET')}`,
      grant_type: 'authorization_code',
      code,
    };
    const url = `${this.configService.get<string>(
      'BASE_URL',
    )}/apps/authorize/token`;
    console.log(url);
    return this.httpService.post(url, data).pipe(
      map((response) => response.data),
      catchError((error) => {
        throw new HttpException(error.response.data, error.response.status);
      }),
    );
  }

  async getProducts(storeId: number): Promise<Observable<AxiosResponse<any>>> {
    const url = `${this.configService.get<string>(
      'API_URL',
    )}/${storeId}/products`;
    console.log({ url });
    return this.httpService.get(url, this.localConfig()).pipe(
      map((response) => response.data),
      catchError((error) => {
        throw new HttpException(error.response.data, error.response.status);
      }),
    );
  }
}
