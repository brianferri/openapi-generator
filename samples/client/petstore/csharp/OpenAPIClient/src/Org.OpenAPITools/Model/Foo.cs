/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// Foo
    /// </summary>
    [DataContract]
    public partial class Foo :  IEquatable<Foo>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Foo" /> class.
        /// </summary>
        /// <param name="bar">bar (default to &quot;bar&quot;).</param>
        public Foo(string bar = "bar")
        {
            this.Bar = bar;
            // use default value if no "bar" provided
            if (bar == null)
            {
                this.Bar = "bar";
            }
            else
            {
                this.Bar = bar;
            }
        }

        /// <summary>
        /// Gets or Sets Bar
        /// </summary>
        [DataMember(Name="bar", EmitDefaultValue=true)]
        public string Bar { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Foo {\n");
            sb.Append("  Bar: ").Append(Bar).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as Foo);
        }

        /// <summary>
        /// Returns true if Foo instances are equal
        /// </summary>
        /// <param name="input">Instance of Foo to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Foo input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Bar == input.Bar ||
                    (this.Bar != null &&
                    this.Bar.Equals(input.Bar))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Bar != null)
                    hashCode = hashCode * 59 + this.Bar.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
