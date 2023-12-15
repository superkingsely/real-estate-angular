import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { Property } from 'src/app/model/Property';
import { MyServiceService } from 'src/app/services/my-service.service';

@Injectable({
  providedIn: 'root'
})
// depricated here
export class ResolverService implements Resolve<Property> {
constructor(private Service:MyServiceService,private router:Router) { }
resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Property|Observable<Property>{
  const propId=route.params['id']
  return <Observable<Property>>this.Service.GetPropById(+propId)
  // .pipe(catchError(error=>{
  //   this.router.navigate(['/'])
  //   return of(null)
  // }))
  // the above .pipe is the code to takecare of server error buh dont seems to wrk
}

}
