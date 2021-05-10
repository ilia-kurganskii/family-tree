import { injectable } from "inversify";
import { Observable } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap } from "rxjs/operators";
import { configuration } from "../config/configuration";

@injectable()
export class HttpService {
  post<T, D>(url: string, data: D): Observable<T> {
    return fromFetch(`${configuration.backendHost}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).pipe(
      switchMap((response) => {
        if (response.status >= 400) {
          // Return the known error for future handling
          throw new Error();
        }
        return response.json();
      })
    );
  }
}
